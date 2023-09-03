import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AddressOutput } from "./autocomplete-output";

export const getAddressAutocomplete = async (
  ctx: QueryFunctionContext
): Promise<AddressOutput> => {
  const [, text] = ctx.queryKey as [key: string, text: string];
  
  return axios
    .get<AddressOutput>(
      `${process.env.NEXT_PUBLIC_GEO_API_BASE_URL}?text=${text}&apiKey=${process.env.NEXT_PUBLIC_GEO_API_KEY}`
    )
    .then((r) => r.data)
    .catch((e) => {
      throw e;
    });
};

/**
 * 
 * @param text The location that the user are looking for
 * @returns AddressOutput
 * @description hook to get autocomplete for the location based on the text received as parameter
 */
export const useGetAddress = (text: string) => {
  return useQuery({
    queryFn: getAddressAutocomplete,
    enabled: text == "" ? false : true,
    queryKey: ["GET_ADDRESS_AUTOCOMPLETE", text],
  });
};
