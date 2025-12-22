import { useEffect } from "react";
import { actions } from "../actions";
import { MyPosts } from "../components/profile/MyPosts";
import { ProfileInfo } from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

export const ProfilePage = () => {
  // const [user, setUser] = useState(null);
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { state, dispatch } = useProfile();

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        // setLoading(true);
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        // setUser(response?.data?.user);
        // setPosts(response?.data?.posts);

        if (response.status === 200) {
          dispatch({ type: actions.profile.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
        // setError(error);
      }
      // finally {
      //   setLoading(false);
      // }
    };

    fetchProfile();
  }, []);

  if (state?.loading) {
    return <div>Fetching your profile data...</div>;
  }

  return (
    // <div>
    //   Welcome, {state?.user?.firstName} {state?.user?.lastName}
    //   <p>You have {state?.posts.length} posts.</p>
    // </div>
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
};
