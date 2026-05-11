import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUserEmailRequest, EmailRequest } from "@/api/user";
import toast from "react-hot-toast";

type EmailResponse = {
  message: string;
};

export function useCreateEmailRequest() {
  return useMutation<EmailResponse, Error, EmailRequest>({
    mutationFn: createUserEmailRequest,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
