import { AreaChart, BarChart, LineChart } from "@mantine/charts"
import { Grid, Paper, Title } from "@mantine/core"

const data1 = [
  {
    date: "Mar 22",
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: "Mar 23",
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: "Mar 24",
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: "Mar 25",
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: "Mar 26",
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
]
const data2 = [
  { month: "January", Smartphones: 120, Laptops: 80, Tablets: 10 },
  { month: "February", Smartphones: 90, Laptops: 120, Tablets: 40 },
  { month: "March", Smartphones: 40, Laptops: 100, Tablets: 20 },
  { month: "April", Smartphones: 100, Laptops: 20, Tablets: 80 },
  { month: "May", Smartphones: 80, Laptops: 140, Tablets: 120 },
  { month: "June", Smartphones: 75, Laptops: 60, Tablets: 100 },
]

export const data3 = [
  {
    date: "Mar 22",
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: "Mar 23",
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: "Mar 24",
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: "Mar 25",
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: "Mar 26",
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
]

const Chart1 = () => {
  return (
    <Paper radius="md" shadow="xs" p="md">
      <Title order={4} mb="xl">
        Chart 1
      </Title>

      <AreaChart
        h={300}
        data={data1}
        dataKey="date"
        series={[
          { name: "Apples", color: "indigo.6" },
          { name: "Oranges", color: "blue.6" },
          { name: "Tomatoes", color: "teal.6" },
        ]}
        curveType="bump"
        tickLine="x"
        withXAxis={false}
        withYAxis={false}
        withDots={false}
      />
    </Paper>
  )
}

const Chart2 = () => {
  return (
    <Paper radius="md" shadow="xs" p="md">
      <Title order={4} mb="xl">
        Chart 2
      </Title>

      <BarChart
        h={300}
        data={data2}
        dataKey="month"
        series={[
          { name: "Smartphones", color: "violet.6" },
          { name: "Laptops", color: "blue.6" },
          { name: "Tablets", color: "teal.6" },
        ]}
        tickLine="none"
      />
    </Paper>
  )
}

const Chart3 = () => {
  return (
    <Paper radius="md" shadow="xs" p="md">
      <Title order={4} mb="xl">
        Chart 3
      </Title>

      <LineChart
        h={300}
        data={data3}
        dataKey="date"
        series={[
          { name: "Apples", color: "indigo.6" },
          { name: "Oranges", color: "blue.6" },
          { name: "Tomatoes", color: "teal.6" },
        ]}
        curveType="bump"
        tickLine="none"
        withDots={false}
      />
    </Paper>
  )
}

export const DashboardCharts = () => {
  return (
    <Grid>
      <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
        <Chart1 />
      </Grid.Col>

      <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
        <Chart2 />
      </Grid.Col>

      <Grid.Col span={{ lg: 4, md: 6, sm: 12 }}>
        <Chart3 />
      </Grid.Col>
    </Grid>
  )
}
