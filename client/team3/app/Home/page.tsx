import AdminCat from "../Admin/AdminCategory/page";
import Footer from "../Footer/page";
import Nav from "../Nav/page";
import { ElementError } from "../NotFound/page";


export default function Home() {
    return (
      <div>
      <div > 
        {/* className="flex flex-col h-screen" */}
      <Nav/>
      </div>
      <AdminCat/>
      
      </div>
    );
}    