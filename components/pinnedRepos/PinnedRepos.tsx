import { PinnedItem } from '../../lib/models';
import PinnedRepo from './PinnedRepo';
import { Grid } from '@mantine/core';

type PinnedReposProps = {
  repos: PinnedItem[];
}

const PinnedRepos = ({ repos }: PinnedReposProps) => {
  // TODO cards are diff sizes
  return (
    <Grid gutter='md'>
      {
        repos.map((repo: PinnedItem) =>
          <Grid.Col md={6} lg={4} key={repo.name}>
            <PinnedRepo {...repo} />
          </Grid.Col>,
        )
      }
    </Grid>
  );
};

export default PinnedRepos;
