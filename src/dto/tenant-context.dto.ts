import {PermissionDTO} from "./permission.dto"


export interface TenantContextDTO {
  tenantId: string;
  tenantName: string;
  permissions: PermissionDTO[];
}