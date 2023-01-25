import { NextPage } from "next";
import AdminLayout from "../../components/common/layout/AdminLayout";

interface Props {}

const Admin: NextPage<Props> = (props) => {
  return (
    <AdminLayout>
      <div>This is Admin</div>
    </AdminLayout>
  );
};

export default Admin;
