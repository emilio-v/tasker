import { Layout } from "@/components/layouts";
import { EntryList } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home | Tasker">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="TO DO" />

            <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="IN PROGRESS" />

            <EntryList />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="COMPLETED" />

            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
