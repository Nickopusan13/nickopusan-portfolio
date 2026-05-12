import { useMutation } from "@tanstack/react-query";
import { createUserEmailRequest, chatBotMessage } from "@/api/user";
import type { EmailRequest, ChatRequest, ChatResponse } from "@/api/user";
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

export function useChatBotMessage() {
  return useMutation<ChatResponse, Error, ChatRequest>({
    mutationFn: chatBotMessage,
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
