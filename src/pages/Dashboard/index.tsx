import { Suspense } from "react";
import CardList from "../../components/CardList";
import Carrousel from "../../components/Carrousel";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

const Dashboard = () => {
  return (
    <>
    <Suspense fallback={<Loading />}>
    <Header />
    <Carrousel />
    <CardList />
    </Suspense>
    </>
  )
};

export default Dashboard;
