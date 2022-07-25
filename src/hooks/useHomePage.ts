import { getAllTopicStart } from '@redux/slices/topicSlice';
import { getUserSlice } from '@redux/slices/userSlice';
import { useAppDispatch, useAppSelector } from '@redux/store';
import { SearchStudybudInput } from '@type/search-studybud';
import { PointType, Standard } from '@type/standard';
import { searchStudybudQuery } from '@request/graphql/query/search-studybud.query';
import { useEffect, useState } from 'react';

export const useHomePage = () => {
  const [loadingSearchForm, setLoadingSearchForm] = useState<boolean>(false);
  const [searchStudybudResult, setSearchStudybudResult] = useState<any>([]);
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

  const onSubmitRequestStudybud = async (values: SearchStudybudInput) => {
    setLoadingSearchForm(true);

    if (values.pointValue) {
      values.point = null;
    } else {
      values.pointValue = null;
    }
    console.log(values);

    try {
      const response = await searchStudybudQuery(values);
      console.log('res', response);
      setSearchStudybudResult(response);
    } catch (e) {
      console.log('Error: ', e);
    }

    setLoadingSearchForm(false);
    // const standard: Standard = (values as any)?.standardData;
    // const pointTmp = values.point;
    // values.point = standard.pointType === PointType.INPUT ? pointTmp : null;
    // values.pointValue = standard.pointType === PointType.INPUT ? null : pointTmp;
    // delete (values as any)?.standardData;
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

  return { 
    onSubmitRequestStudybud,
    loadingSearchForm,
    searchStudybudResult
  };
};
