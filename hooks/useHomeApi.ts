import {
  ASSIGNED,
  BRANDSANDTEAM,
  INVENTORY,
  PROFILE,
} from "@/constants/queryKey";
import {
  getAssignedData,
  getBrandsAndTeamData,
  getInventoryData,
  getProfileData,
} from "@/lib/api/home.api";
import { BrandsAndTeam } from "@/types/brandsAndTeam.type";
import { InventoryOrAssignedResponse } from "@/types/inventoryAndAssigned.type";
import { UserProfile } from "@/types/profile.type";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  return useQuery<UserProfile>({
    queryKey: [PROFILE],
    queryFn: getProfileData,
  });
}

export function useBrandsAndTeam() {
  return useQuery<BrandsAndTeam>({
    queryKey: [BRANDSANDTEAM],
    queryFn: getBrandsAndTeamData,
  });
}

export function useInventory(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  return useQuery<InventoryOrAssignedResponse>({
    queryKey: [INVENTORY, pageNo, eventStatus, count, searchFor],
    queryFn: () => getInventoryData(pageNo, eventStatus, count, searchFor),
  });
}

export function useAssigned(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  return useQuery<InventoryOrAssignedResponse>({
    queryKey: [ASSIGNED, pageNo, eventStatus, count, searchFor],
    queryFn: () => getAssignedData(pageNo, eventStatus, count, searchFor),
  });
}
