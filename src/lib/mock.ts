export type Participant = {
  id: string;
  name: string;
  email: string;
  mealScanned: boolean;
};

export const mockParticipants: Participant[] = [
  { id: "1", name: "Ada Lovelace", email: "ada@example.com", mealScanned: true },
  { id: "2", name: "Alan Turing", email: "alan@example.com", mealScanned: false },
  { id: "3", name: "Grace Hopper", email: "grace@example.com", mealScanned: false },
];

export const mockUser = { name: "Test User", qrToken: "demo-qr-token-123" };