import { Outlet ,Link } from "react-router-dom";

export default function App(){
    return (
        <div>
            <h1>BookKeeper!</h1>
            <nav>
                <Link to="/invoices">Invoices</Link>|{" "}
                <Link to="/expenses">Expense</Link>
            </nav>
            <Outlet />
        </div>
    );
}