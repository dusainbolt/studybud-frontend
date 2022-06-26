import { getAllTopicStart } from '@redux/slices/topicSlice';
import { getUserSlice, updateProfileStart } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { createStudyMutation } from '@request/graphql/mutation/create-study-request.mutation';
import { updateStudyMutation } from '@request/graphql/mutation/update-study-request.mutation';
import { searchStudyRequestQuery } from '@request/graphql/query/search-study-request.query';
import { CreateStudyRequestInput, StudyRequest } from '@type/request-studybud';
import { PointType, Standard } from '@type/standard';
import { UpdateUserInput } from '@type/user';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useProfilePage = () => {
  const [loadingRequestForm, setLoadingRequestForm] = useState<boolean>(false);
  const [loadingStudyRequestList, setLoadingStudyRequestList] = useState<boolean>(true);
  const [myStudyRequestList, setMyStudyRequestList] = useState<any>([]);
  const [visibleModalRequestStudybud, setVisibleModalRequestStudybud] = useState<boolean>(false);
  const [studyEditInfo, setStudyEditInfo] = useState<StudyRequest>();
  const { user } = useAppSelector(getUserSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?._id) {
      fetchListRequestStart();
      dispatch(getAllTopicStart());
    }
  }, []);

  const fetchListRequestStart = async () => {
    setLoadingStudyRequestList(true);
    try {
      const response = await searchStudyRequestQuery({ userId: user?._id });
      setMyStudyRequestList(response);
    } catch (e) {
      console.log('Error: ', e);
    }
    setLoadingStudyRequestList(false);
  };

  const onSubmitRequestStudybud = async (values: CreateStudyRequestInput) => {
    setLoadingRequestForm(true);
    const standard: Standard = (values as any)?.standardData;
    const pointTmp = values.point;
    values.point = standard.pointType === PointType.INPUT ? pointTmp : null;
    values.pointValue = standard.pointType === PointType.INPUT ? null : pointTmp;
    delete (values as any)?.standardData;
    try {
      let response;
      let message;
      if (studyEditInfo?._id) {
        response = await updateStudyMutation({ ...values, requestId: studyEditInfo?._id });
        setMyStudyRequestList((oldState) =>
          oldState.map((item) => (item._id === studyEditInfo?._id ? response : item))
        );
        message = `Cập nhật thành công`;
      } else {
        response = await createStudyMutation(values);
        setMyStudyRequestList((oldState) => [response, ...oldState]);
        message = `Thêm mới thành công`;
      }
      setVisibleModalRequestStudybud(false);
      toast.success(message);
    } catch (e) {
      console.log('Error: ', e);
    }
    setLoadingRequestForm(false);
  };

  const onSubmitModalProfile = (variables: UpdateUserInput) => {
    dispatch(updateProfileStart({ userId: user?._id, variables }));
  };

  const toggleModalRequestStudybud = () => {
    setVisibleModalRequestStudybud((visible) => !visible);
    setStudyEditInfo({} as any);
  };

  const openEditStudyRequest = (data) => () => {
    setStudyEditInfo(data);
    setVisibleModalRequestStudybud(true);
  };

  return {
    loadingRequestForm,
    visibleModalRequestStudybud,
    toggleModalRequestStudybud,
    myStudyRequestList,
    loadingStudyRequestList,
    fetchListRequestStart,
    onSubmitRequestStudybud,
    onSubmitModalProfile,
    openEditStudyRequest,
    studyEditInfo,
  };
};
