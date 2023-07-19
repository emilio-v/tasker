interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};
