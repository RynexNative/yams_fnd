


export interface UserDTO {
  id: string | null;
  name: string | null;
  email: string | null;
  account_type: string;
  accountType: string
  // any other fields
}

export interface ProfileRequestDTO{

}

export interface ProfileResponseDTO{
  data: any;
  
}