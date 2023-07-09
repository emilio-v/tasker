import { Layout } from "@/components/layouts";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" color="primary">
        Hello
      </Typography>
    </Layout>
  );
};

export default HomePage;
