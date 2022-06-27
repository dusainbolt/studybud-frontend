import { getAllTopicStart } from '@redux/slices/topicSlice';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { useEffect } from 'react';

export const useHomePage = () => {
  // const [loadingRequestForm, setLoadingRequestForm] = useState<boolean>(false);
  // const [loadingStudyRequestList, setLoadingStudyRequestList] = useState<boolean>(true);
  // const [myStudyRequestList, setMyStudyRequestList] = useState<any>([]);
  // const [visibleModalRequestStudybud, setVisibleModalRequestStudybud] = useState<boolean>(false);
  // const [studyEditInfo, setStudyEditInfo] = useState<StudyRequest>();
  const { user } = useAppSelector(getUserSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?._id) {
      dispatch(getAllTopicStart());
    }
  }, []);

  // const fetchListRequestStart = async () => {
  //   setLoadingStudyRequestList(true);
  //   try {
  //     const response = await searchStudyRequestQuery({ userId: user?._id });
  //     setMyStudyRequestList(response);
  //   } catch (e) {
  //     console.log('Error: ', e);
  //   }
  //   setLoadingStudyRequestList(false);
  // };

  const onSubmitRequestStudybud = async () => {
    // setLoadingStudyRequestList(true);
  };

  // const onSubmitModalProfile = (variables: UpdateUserInput) => {
  //   dispatch(updateProfileStart({ userId: user?._id, variables }));
  // };

  // const toggleModalRequestStudybud = () => {
  //   setVisibleModalRequestStudybud((visible) => !visible);
  //   setStudyEditInfo({} as any);
  // };

  // const openEditStudyRequest = (data) => () => {
  //   setStudyEditInfo(data);
  //   setVisibleModalRequestStudybud(true);
  // };

  return { onSubmitRequestStudybud };
};
