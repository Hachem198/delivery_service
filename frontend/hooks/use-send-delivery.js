import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useSendDelivery = () => {
  return useMutation({
    mutationFn: (delivery) => {
      return axios.post("/api/deliveries", delivery);
    },
  });
};
