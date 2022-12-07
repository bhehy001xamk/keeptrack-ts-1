import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from '../ProjectList';
import { MOCK_PROJECTS } from '../MockProjects';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../state';

describe('<ProjectList />', () => {
  const setup = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProjectList projects={MOCK_PROJECTS} />
        </MemoryRouter>
      </Provider>
    );

  beforeEach(() => {});

  test('pitäisi renderöidä ilman kaatumista', () => {
    setup();
    expect(screen).toBeDefined();
  });

  test('pitäisi näyttää lista', () => {
    setup();
    expect(screen.getAllByRole('heading')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('img')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('link')).toHaveLength(MOCK_PROJECTS.length);
    expect(screen.getAllByRole('button')).toHaveLength(MOCK_PROJECTS.length);
  });

  test('pitäisi näyttää lomake kun edit painiketta on klikattu', async () => {
    setup();
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', { name: /edit Wisozk Group/i })
    );
    expect(
      screen.getByRole('form', {
        name: /edit a project/i,
      })
    ).toBeInTheDocument();
  });

  test('pitäisi näyttää kuva ja sulkea lomake kun cancel painiketta painetaan', async () => {
    setup();
    const user = userEvent.setup();
    await user.click(
      screen.getByRole('button', { name: /edit Wisozk Group/i })
    );
    await user.click(
      screen.getByRole('button', {
        name: /cancel/i,
      })
    );
    expect(
      screen.getByRole('img', {
        name: /wisozk group/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('form', {
        name: /edit a project/i,
      })
    ).not.toBeInTheDocument();
  });
});
