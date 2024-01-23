import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axios from "axios"
import { axiosBaseOptions } from "./axios-setup"
import type { AxiosDownload, Upload, UrlDownload } from "./type"

class _ApiService {
  private readonly axiosInstance: AxiosInstance

  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.initInterceptors()
  }

  private initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        return Promise.reject(error)
      },
    )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data } = response
        if (data instanceof Blob) {
          return response
        } else {
          return data
        }
      },
      (error: AxiosError<{ message?: string }>) => {
        return Promise.reject(error)
      },
    )
  }

  public updateToken(token: string) {
    this.axiosInstance.defaults.headers["authorization"] = `Bearer ${token}`
  }

  get<T = any>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.get(url, data)
  }

  post<T = any>(url: string, data?: object | unknown): Promise<T> {
    return this.axiosInstance.post(url, data)
  }

  put<T = any>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.put(url, data)
  }

  delete<T = any>(url: string, data?: object): Promise<T> {
    return this.axiosInstance.delete(url, data)
  }

  upload<T = any>(params: Upload): Promise<T> {
    const { url, file, controller, onUploadProgress } = params
    return this.axiosInstance.post(url, file, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress,
      signal: controller ? controller.signal : undefined,
    })
  }

  axiosDownload(params: AxiosDownload): void {
    const { url, data, controller, fileName, onDownloadProgress } = params
    this.axiosInstance
      .get<Blob>(url, {
        params: data,
        responseType: "blob",
        onDownloadProgress,
        signal: controller ? controller.signal : undefined,
      })
      .then((res) => {
        const blob = new Blob([res.data])
        const a = document.createElement("a")
        a.style.display = "none"
        if (fileName) {
          a.download = fileName
        } else {
          a.download = decodeURIComponent(
            res.headers["content-disposition"]
              .split(";")
              .slice(-1)[0]
              .split("=")[1]
              .replaceAll('"', ""),
          )
        }
        a.href = URL.createObjectURL(blob)
        document.body.appendChild(a)
        a.click()
        URL.revokeObjectURL(a.href)
        document.body.removeChild(a)
      })
  }

  urlDownload(params: UrlDownload) {
    const { fileName, serveBaseUrl, fileUrl } = params
    const a = document.createElement("a")
    a.style.display = "none"
    a.download = fileName
    a.href = serveBaseUrl ? `${serveBaseUrl}${fileUrl}` : fileUrl
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(a.href)
    document.body.removeChild(a)
  }
}

export const ApiService = new _ApiService(axiosBaseOptions)
