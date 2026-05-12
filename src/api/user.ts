import axios, { AxiosError } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface ApiErrorResponse {
  detail?: string;
  message?: string;
}

export interface EmailRequest {
  email: string;
  firstName: string;
  lastName: string;
  subject: string;
  content: string;
}

export interface ChatRequest {
  prompt: string;
  sessionId?: string;
}

export interface ChatResponse {
  reply: string;
  sessionId: string;
}

export async function createUserEmailRequest(data: EmailRequest) {
  try {
    const res = await axios.post(`${API_URL}/api/send-email`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      throw new Error(errorData.detail || "Error sending message");
    } else {
      throw new Error(error.message || "Error sending message");
    }
  }
}

export async function chatBotMessage(data: ChatRequest) {
  try {
    const res = await axios.post(`${API_URL}/api/chat`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<ApiErrorResponse>;
    if (error.response && error.response.data) {
      const errorData = error.response.data;
      throw new Error(errorData.detail || "Error");
    } else {
      throw new Error(error.message || "Error");
    }
  }
}
