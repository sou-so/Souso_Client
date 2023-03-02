<!-- PROJECT LOGO -->
<div align="center">
  <img src="https://user-images.githubusercontent.com/68415905/204304547-05dc3ea6-d249-4208-a2af-3868e6c0fa3b.png" alt="Logo" width="80" >  
  <h1>Souso, Young at heart</h1>
  <p>
    <a href="https://souso.netlify.app/">View Demo Page</a> ·
    <a href="https://www.youtube.com/embed/-884siNKkXY">View Demo Video</a>
  </p>

<br>

[![Contributors][contributors-shield]][contributors-url]

[contributors-shield]: https://img.shields.io/github/contributors/devjoylee/numble-community.svg?style=for-the-badge
[contributors-url]: https://github.com/devjoylee/numble-community/graphs/contributors

</div>

<!-- TABLE OF CONTENTS -->
<details align="right">
  <summary>Table of Contents</summary>
    <div><a href="#About-The-Project">About The Project</a></div>
    <div><a href="#Built-With">Built With</a></div>
    <div><a href="#Getting-Started">Getting Started</a></div>
    <div><a href="#Main-Features">Main Features</a></div>
    <div><a href="#Commit-Convention">Commit Convention</a></div>
    <div><a href="#Project-Proposal">Project Proposal</a></div>
</details>

## About The Project

> - It is a social networking platform for **middle-aged adults** to help them make neighborhood Friends easily. This app will track **the user's location** using `KakaoMap API` and will show postings from nearby users or chat with them. It was a part of Web Development challenges from [NUMBLE,](https://www.numble.it/2d89fd58-a9c0-49c7-ae13-abc7f7a5af52) a side-project platform for developers in Korea, and my team won **2nd prize in this challenge**! 🎉

- **Service Target Group**: the middle aged like parents generation. (40~60)
- **Production Period** : 2022.10 - 2022.12
- **Team Members**

<table>
  <tr>
    <td align="center">
      <a href="#" style="color:#fff">
        <img src="https://user-images.githubusercontent.com/68415905/197453772-833ebfd8-2af3-40b1-a358-1bd7a33486b1.png" width="100px;" heightalt="" /><br />
        <sub>
          <b>Hyejoo Kang</b><br />
          <b>Designer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/devjoylee" style="color:#fff">
        <img src="https://avatars.githubusercontent.com/devjoylee" width="100px;" alt="" /><br />
        <sub>
          <b>Joy Lee</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Jeong-jj" style="color:#fff">
        <img src="https://avatars.githubusercontent.com/Jeong-jj" width="100px;" alt="" /><br />
        <sub>
          <b>Jeongjun Jo</b><br />
          <b>Frontend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/dkswnkk" style="color:#fff">
        <img src="https://avatars.githubusercontent.com/dkswnkk" width="100px;" alt="" /><br />
        <sub>
          <b>Juhyeong Ahn</b><br />
          <b>Backend Developer</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/skmn3" style="color:#fff">
        <img src="https://avatars.githubusercontent.com/skmn3" width="100px;" alt="" /><br />
        <sub>
          <b>Sangjin Park</b><br />
          <b>Backend Developer</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

[👉 Go to Our Team Dashboard](https://www.notion.so/prose-club/75035d7b26f648719b09d062f94474c3)

[👉 Go to Figma](https://www.figma.com/file/xiyo0FPyp4o9WGYjjdfzbK/%EB%84%98%EB%B8%94-%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%95%B1?node-id=3%3A10127&t=8MW7KDnDTT0XAAN0-1)

<br/>

## Built With

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">&nbsp;&nbsp;<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=storybook&logoColor=white"/>

<br/>

## Getting Started

You are able to start the app by typing the following commands in the command line:

```bash
git clone https://github.com/devjoylee/souso.git
npm install
npm start
```

<br/>

## Main Features

### 1. Join Form - Phone number Verification

- Implemented sending verification code by connecting backend API using `React-Query`.
- Organized endpoints and queries for Join Page in a separated API folder.
- Created a reusable `Input` component and `useForm` hook.
- Code Preview

```jsx
// api/queries/join.js
import { api } from 'api';
import { JOIN, CHECK_NICKNAME, SEND_CODE, VERIFY_CODE } from 'api/endpoints';

export const join = {
  submit: async req => {
    const res = await api.post(JOIN, req);
    return res.data;
  },
  nickname: async req => {...},
  sendCode: async req => {...},
  verifyCode: async req => {...}
};
```

```jsx
// components/Join/InputVerified
import React, { useState, useEffect } from 'react';
import { Input } from 'components/Join';
import { useMutation } from 'react-query';
import { join } from 'api/queries/join';

export const InputVerified = ({
  values,
  onChange,
  errors,
  isVerified,
  setIsVerified
}) => {
  const [isSent, setIsSent] = useState(false);

  // 👉 response from the verification code API
  const { mutate: sendCodeMutate } = useMutation(join.sendCode, {
    onSuccess: () => {
      errors.phone_number = '';
      toast.success('Sent successfully');
      setIsSent(true);
      setWaiting(true);
    },
    onError: error => {
      if (error.response.data.message === 'Already Auth Code Exist') {
        errors.phone_number = 'You can send a code after 3mins.';
      } else if (error.response.data.message === 'Already Phone Number Exist') {
        errors.phone_number = 'The phone number already exists.';
      }
    }
  });

  // 👉 request verification when button is clicked
  const sendCode = async e => {
    e.preventDefault();
    const errorMessage = await validate(values);
    errors.phone_number = errorMessage.phone_number || '';

    if (!errors.phone_number) {
      sendCodeMutate({ phone_number: values.phone_number });
    }
    setRender(values);
  };

  useEffect(() => {
    setIsSent(false);
  }, [setIsSent]);

  return (
    <Input
      name="phone_number"
      placeholder="phone number"
      onChange={onChange}
      values={values}
      errors={errors}
    >
      <button onClick={sendCode}>{isSent ? 'Resend' : 'Send'}</button>
    </Input>
    // ...
  );
};
```

<br>

### 2. KakaoMap API for Geolocation

- When signing up, this API will help you to get the neighborhood name for the user's location. <br>
  **📝 [Read more about KakaoMap API](https://apis.map.kakao.com/web/guide/)**
- Adopted `Recoil` state storage to manage the neighborhood name globally.
- Utilized `Geolocation` to get the current latitude and longitude of the user.
- Code Preview

```jsx
// components/TownAuth/KakaoMap
import React, { useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useSetRecoilState } from 'recoil';
import * as S from './styles';

export const KakaoMap = ({ openModal }) => {
  const [currentGeo, setCurrentGeo] = useState({ lat: 0, lng: 0 });
  const [pickedGeo, setPickedGeo] = useState(currentGeo);
  const [address, setAddress] = useState([]);

  const setSaveAddress = useSetRecoilState(addressState);

  const { kakao } = window; // 👉 call KakaoAPI from <head>
  const mapRef = useRef();

  // 👉 get latitude and longitude of picked location on the map
  const getPickedGeo = (_, mouseEvent) => {
    setPickedGeo({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng()
    });
  };

  // 👉 move the pin to the current location on the map.
  const moveToCurrent = () => {
    const center = new kakao.maps.LatLng(currentGeo.lat, currentGeo.lng);
    if (mapRef.current) {
      mapRef.current.panTo(center);
      setPickedGeo(currentGeo);
    }
  };

  useEffect(() => {
    // 👉 get the current location using GeoLocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCurrentGeo({
          lat: coords.latitude,
          lng: coords.longitude
        });
        setPickedGeo({
          lat: coords.latitude,
          lng: coords.longitude
        });
      });
    }
  }, []);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    // 👉 request the detailed address of coordinates
    const getAddressFromGeo = (coords, callback) => {
      geocoder.coord2Address(coords.lng, coords.lat, callback);
    };

    // 👉 return the address when the specific point is clicked on the map.
    getAddressFromGeo(pickedGeo, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        setAddress([
          result[0].address.region_1depth_name,
          result[0].address.region_2depth_name,
          result[0].address.region_3depth_name
        ]);
      }
    });
  }, [kakao, pickedGeo, setAddress]);

  useEffect(() => {
    setSaveAddress(address); // save the address
  }, [setSaveAddress, address]);

  return (
    <S.MapContainer>
      <Map
        center={currentGeo}
        onClick={getPickedGeo}
        className="kakao_map"
        ref={mapRef}
      >
        <MapMarker position={pickedGeo} />
      </Map>
      <SearchSection openModal={openModal} moveToCurrent={moveToCurrent} />
    </S.MapContainer>
  );
};
```

<br>

### 3. Infinite Scroll `useInfiniteQuery` by React-Query

- Implemented **the infinite scroll** when the feed list is loaded
- If the scroll is down to the `FetchObserver`, it will send request to fetch the next page.
- Code Preview

```jsx
// pages/FeedPage
import { useInfiniteQuery } from 'react-query';
import { feed } from 'api/queries/feed';

export const FeedPage = () => {
  const params = pageParam => {
    return {
      cursorId: isLatest ? pageParam : 0,
      pageId: !isLatest ? pageParam : 0,
      sortType: isLatest ? 'LATEST' : 'POPULAR'
    };
  };

  // request fetching more feed data if the next page exists.
  const infiniteResponse = useInfiniteQuery(
    ['feed'],
    ({ pageParam = 0 }) => feed.list(params(pageParam)),
    {
      getNextPageParam: lastPage =>
        isLatest
          ? lastPage.feed_list.length > 0 &&
            lastPage.feed_list.slice(-1)[0].feed_id
          : lastPage.page_id + 1
    }
  );

  return (
    <PostList
      active={active}
      setActive={setActive}
      infiniteResponse={infiniteResponse}
    />
  );
};
```

```jsx
// components/Feed/PostList
export const PostList = ({ infiniteResponse, active, setActive }) => {
  const { data, isLoading, isFetching, fetchNextPage, refetch } =
    infiniteResponse;
  const { pathname } = useLocation();

  const isEmpty =
    !isLoading &&
    ('feed_list' in data.pages[0]
      ? !data.pages[0].feed_list.length
      : !data.pages[0].category_feed_list.length);

  if (isEmpty) return <EmptyList message="Empty Feed" />;

  return (
    <S.PostListContainer>
      {active === 'popluar' &&
        (isTabLoading ? (
          <SkeletonThRight />
        ) : (
          <S.PostLists>
            {data.pages.map(page =>
              (page.feed_list || page.category_feed_list).map(post => (
                <ThumbRight key={post.feed_id} postData={post} />
              ))
            )}
          </S.PostLists>
        ))}

      {/* Latest feed or categorized feed */}
      {active !== 'popluar' &&
        (isTabLoading ? (
          <SkeletonThBottom />
        ) : (
          <S.PostLists>
            {data.pages.map(page =>
              (page.feed_list || page.category_feed_list).map(post => (
                <ThumbBottom
                  key={post.feed_id}
                  postData={post}
                  refetch={refetch}
                />
              ))
            )}
          </S.PostLists>
        ))}

      {/* If the scrollbar scroll down to this, fetch next page */}
      <FetchObserver
        data={data}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
      />
    </S.PostListContainer>
  );
};
```

<br>

### 4. Custom Skeleton UI

- Created a skeleton component **as placeholders** when texts and images are loading.
- Code Preview

```jsx
// components/Common/Skeleton
import React from 'react';
import { Skeleton } from './Skeleton';
import styled from 'styled-components';

export const SkeletonCategory = () => {
  return (
    <Container>
      {[...Array(8)].map((_, i) => (
        <div key={i}>
          <Skeleton type="circle" size={40} />
          <Skeleton type="text" width={40} />
        </div>
      ))}
    </Container>
  );
};

export const Skeleton = ({ type, height, width, size, line }) => {
  return [...Array(line)].map((_, i) => (
    <SkeletonItem
      key={i}
      className={type}
      height={height}
      width={width}
      size={size}
    >
      <HighLight />
    </SkeletonItem>
  ));
};
```

<br>

## Commit Convention

The commit message is written with the GITMOJI icons in order to make commit messages more intuitive.

| Gitmoji | Meaning                     |
| ------- | --------------------------- |
| 🎉      | Init or begin a project.    |
| 🚚      | Move or rename resources    |
| ✨      | Introduce new features      |
| 💄      | Add the UI and style files  |
| ♻️      | Refactor code               |
| 📝      | Add or update documentation |
| ➕      | Add a dependency            |
| 🐛      | Fix a bug                   |
| 🚀      | Deploy stuff                |

REFERENCE : Gitmoji (http://gitmoji.dev/)

<br/>

## Project Proposal

![image](https://user-images.githubusercontent.com/68415905/206088768-136122de-2d80-47a9-86bb-8f192078bab0.jpg)

<br>

<p align="right">(<a href="#top">back to top</a>)</p>
