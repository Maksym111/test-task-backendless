import {
  Container,
  Header,
  NavItem,
  NavItemLink,
  NavList,
} from "./Navigation.styled";

const Navigation = ({ tabs }) => {
  return (
    <Header>
      <Container>
        <NavList>
          {tabs.map((item) => {
            return (
              <NavItem key={item.id}>
                <NavItemLink to={`/test-task-backendless/${item.id}`}>
                  {item.title}
                </NavItemLink>
              </NavItem>
            );
          })}
        </NavList>
      </Container>
    </Header>
  );
};

export default Navigation;
