import Index from "./components/index";

export default function Message ({ params }) {

    return <Index vendor_id={params.vendor_id} service_id={params.service_id}/>

}
