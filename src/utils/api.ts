const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface ChatRequest {
  prompt: string;
  session_id?: string;
}

export interface ChatResponse {
  reply: string;
  session_id: string;
}

export async function postUserChatBot(
  data: ChatRequest,
): Promise<ChatResponse> {
  const res = await fetch(`${API_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Error");
  }
  const rawResponse = await res.json();
  console.log("[API] Raw response:", rawResponse);
  return rawResponse;
}

interface PreviewRow {
  [key: string]: string | number | null;
}

export interface PreviewData {
  columns: string[];
  preview: PreviewRow[];
}

export async function financePreview(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch(`${API_URL}/api/finance/preview`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Error");
  }
  const data = await res.json();
  return data;
}

export interface ChartRow {
  [key: string]: string | number | null;
}

export interface ChartSuggestion {
  chart_type: string;
  aggregation?: string;
  raw?: string;
}
export interface ChartData {
  data: ChartRow[];
  aggregated_data: ChartRow[];
  chart_suggestion: ChartSuggestion;
}

export async function financeChart(
  file: File,
  x: string,
  y: string,
  group?: string,
): Promise<ChartData> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("x", x);
  formData.append("y", y);
  if (group) formData.append("group", group);
  const res = await fetch(`${API_URL}/api/finance/chart`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Error fetching chart data");
  }
  const data: ChartData = await res.json();
  return data;
}

export async function financeReport(
  file: File,
  x: string,
  y: string,
  group?: string,
) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("x", x);
  formData.append("y", y);
  if (group) formData.append("group", group);
  const res = await fetch(`${API_URL}/api/finance/report`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.detail || "Error fetching report data");
  }
  const data = await res.json();
  return data;
}
