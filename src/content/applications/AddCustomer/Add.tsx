import { Button } from "@mui/material";
import { SidebarContext } from "src/contexts/SidebarContext";
import { NavLink as RouterLink } from 'react-router-dom';
import { useContext } from "react";
import './Add.css';
import { Card } from '@mui/material';

function AddCustomer() {
  const { closeSidebar } = useContext(SidebarContext);
  return (
    <Card>
    <form>
      <div>
        <label>Full name: </label>
        <input type='text' />
      </div>
      <div>
        <label>Email: </label>
        <input type='text' />
      </div>
      <div>
        <label>Phone: </label>
        <input type='phone' />
      </div>
      <div>
        <label>Address: </label>
        <input type='text' />
      </div>
      <div>
        <label>Status: </label>
        <input type='boolean' />
      </div>
      <div className="space1">
      </div>
      <div>
        <Button
          className="btn1"
          disableRipple
          component={RouterLink}
          onClick={closeSidebar}
          to="/dashboards/user"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Back
        </Button>
        <div className="space2">
        </div>
        <Button
          // className="btn2"
          disableRipple
          component={RouterLink}
          onClick={closeSidebar}
          to="/dashboards/user"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Add Customer
        </Button>
      </div>
    </form>
    </Card>
  )
}

export default AddCustomer;