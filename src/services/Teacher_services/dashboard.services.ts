import React from "react";
import { graphqlClient } from "@/api/clients/graphql.client";

interface ProfileResponseDT {

}

export const User = {
    MyProfile: async (): Promise<ProfileResponseDT> => {
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

        const res = await graphqlClient.request<{ getAllProfiles: ProfileResponseDT; }>(query);
        return res.getAllProfiles;
    },
};



