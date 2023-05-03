import { Header } from "../components/Header/Header";
import {ContainerBanners} from '../components/Body/ContainerBanners'
import { Item } from "../components/Item/Item";

export function HomePage() {
    return (
        <>
        <Header />
        <ContainerBanners />
        <Item />
        </>
        
    )
}