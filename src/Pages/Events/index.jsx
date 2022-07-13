import { Container } from "./style";
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import CardProfile from "../../Component/CardProfile";
import { ContainerEventsClient } from "../../Component/ContainerEventsClient";

export const EventsPage = () => {
  return (
    <>
      <Header />
      <Container>
        <CardProfile />
        <ContainerEventsClient />
      </Container>
      <Footer />
    </>
  );
};
