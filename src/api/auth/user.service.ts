import { restClient } from "../clients/rest.client";
import { graphqlClient } from "../clients/graphql.client";
import { ProfileRequestDTO, ProfileResponseDTO } from "@/dto/user.dto";



export const User = {
    MyProfile: async (): Promise<ProfileResponseDTO> => {
    const query = `
    query GetAllProfiles {
        getAllProfiles {
            response {
                id
                status
                code
                message
            }
            data {
                id
                uniqueId
                isActive
                createdAt
                firstName
                lastName
                email
                phoneNumber
                location
                isVerified
                phoneVerified
                accountType
                role {
                    id
                    uniqueId
                    isActive
                    createdAt
                    roleName
                    roleType
                    roleDescription
                    roleCreateddate
                    permissions {
                        id
                        uniqueId
                        isActive
                        createdAt
                        permissionName
                        permissionCode
                        isGlobal
                    }
                }
            }
        }
    }
    `;

        const res = await graphqlClient.request<{
            getAllProfiles: ProfileResponseDTO;
        }>(query);

        return res.getAllProfiles;
    },
};