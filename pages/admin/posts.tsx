import { NextPage } from "next";
import AdminLayout from "../../components/common/layout/AdminLayout";

interface Props {}


const Posts: NextPage<Props> = (props) => {
  return (
    <div>
      <AdminLayout>
        <div>This is POSTS page</div>
      </AdminLayout>
    </div>
  );
};

export default Posts;
