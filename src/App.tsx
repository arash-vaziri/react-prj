import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";

function App() {
  const aboveLg = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show when={aboveLg}>
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="blue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
