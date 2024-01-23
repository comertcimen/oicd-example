import { getFullName } from "@/utils"
import { Exclude, Expose, plainToInstance } from "class-transformer"

export const instanceOptions = {
  exposeUnsetFields: false,
  excludeExtraneousValues: true,
}

export class BaseModel {
  @Expose()
  public id!: string

  @Expose()
  public createdAt?: number

  @Expose()
  public updatedAt?: number
}

export class Contact extends BaseModel {
  @Expose()
  public firstname!: string

  @Expose()
  public lastname!: string

  @Expose()
  public email!: string

  @Expose()
  public avatar?: string

  @Expose()
  public jobTitle?: string

  @Expose()
  public phoneNo?: string

  @Exclude()
  public get fullName(): string {
    return getFullName({ firstname: this.firstname, lastname: this.lastname })
  }

  public static createEmpty(values?: Partial<Contact>): Contact {
    const instance = new Contact()
    const tmp = plainToInstance(Contact, values, instanceOptions)
    Object.assign(instance, tmp)
    return instance
  }
}
