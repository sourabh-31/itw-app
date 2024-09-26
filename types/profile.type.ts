export type UserProfile = {
  id: number;
  employeeCode: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  profileImage: string;
  phoneNumberCountryCode: number;
  phoneNumber: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  isFirstLogin: boolean;
  userDesignation: string;
  userDepartment: string;
  userVertical: string;
  specializationName: string;
  userCity: string;
  userStatus: string;
  teamId: string;
  lastActiveOn: string;
  isDeactivated: boolean;
  isTOForUser: boolean;
  roles: string[];
  teams: any[];
  chatEndpoint: string;
};
