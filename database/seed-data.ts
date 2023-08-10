interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  title: string;
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      title: "Vivamus sit amet arcu mattis, posuere metus vitae, egestas elit.",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      title: "Praesent sed purus vel arcu eleifend blandit.",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};
