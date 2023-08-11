import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout title="Home | Tasker">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "10px" }}>
            <CardHeader
              title="To do"
              titleTypographyProps={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "10px" }}>
            <CardHeader
              title="In progress"
              titleTypographyProps={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            />

            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderRadius: "10px" }}>
            <CardHeader
              title="Completed"
              titleTypographyProps={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            />

            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
