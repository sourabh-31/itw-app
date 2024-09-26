import axios from "axios";

const AUTHORIZATION_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcl9pZCI6MywidXNlckVtYWlsIjoibXVnZXNoQHRoZWFsdGVyb2ZmaWNlLmNvbSIsInVzZXJOYW1lIjoiTXVnZXNoIFRBTyIsImRldmljZUlkIjoiIiwicm9sZXMiOlsiQURNSU4iLCJCTyIsIlBPIl0sImlhdCI6MTcyNzE3NDEyMX0.yYpuVUcojsItKk0X-yuRPOmP7Xsl2YG7v6DFrJ-0-LM";

export async function getProfileData() {
  try {
    const response = await axios.get(
      "https://beta-api.itwcrm.com/user/v2?userId=3",
      {
        headers: {
          "X-authorization-token": AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function getBrandsAndTeamData() {
  try {
    const response = await axios.get(
      "https://beta-api.itwcrm.com/user/dashboard/v2",
      {
        headers: {
          "X-authorization-token": AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function getInventoryData(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  try {
    const response = await axios.get(
      `https://beta-api.itwcrm.com/inventory/events/for-po?pageNo=${pageNo}&searchFor=${searchFor}&eventStatus=${eventStatus}&count=${count}`,
      {
        headers: {
          "X-authorization-token": AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    return { error };
  }
}

export async function getAssignedData(
  pageNo: number,
  eventStatus: string,
  count: number,
  searchFor: string
) {
  try {
    const response = await axios.get(
      `https://beta-api.itwcrm.com/inventory/events/for-bo?pageNo=${pageNo}&searchFor=${searchFor}&eventStatus=${eventStatus}&count=${count}`,
      {
        headers: {
          "X-authorization-token": AUTHORIZATION_TOKEN,
        },
      }
    );

    return response.data;
  } catch (error) {
    return { error };
  }
}
