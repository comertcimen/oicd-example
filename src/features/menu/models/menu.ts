import { Expose } from "class-transformer"

export class Menu<TData extends Record<string, any> = Record<string, any>> {
  @Expose()
  public id!: string

  @Expose()
  public label!: string

  @Expose()
  public icon?: string

  @Expose()
  public to?: string

  @Expose()
  public children?: Omit<Menu, "icon">[]

  @Expose()
  public data?: TData
}
