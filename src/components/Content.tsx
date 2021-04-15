import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner/Spinner";
import { AppState } from "../store/reducers";
import { search, clearImages } from "./../store/actions/imageActions";
import { chunk } from "../util";
import { IContent } from "../store/types";
import Error from "./Error";
import { ColumnDiv, Image, RowDiv } from "./../constants/styles";
import Button from "./Button";

const Content = () => {
  const { name, id } = useParams<{
    name: string;
    id: string;
  }>();

  const [imageCount, setImageCount] = useState(10);
  const state = useSelector((state: AppState) => state.image);
  const imageDispatch = useDispatch();

  useEffect(() => {
    imageDispatch(clearImages());
  }, [id]);

  useEffect(() => {
    imageDispatch(search(id));
  }, [imageCount, id]);

  const setloadmore = () => {
    setImageCount((prev) => prev + 10);
  };

  return (
    <div>
      <ColumnDiv>
        {state.error ? (
          <Error message={state.error}></Error>
        ) : state.loading && state.images.length < 1 ? (
          <Spinner />
        ) : (
          chunk(state.images, 3).map((items: IContent[], i: number) => {
            return (
              <RowDiv key={i}>
                {items.map((item, index) => {
                  return <Image src={item.url} alt={`${name}-${item.id}`} />;
                })}
              </RowDiv>
            );
          })
        )}
      </ColumnDiv>
      {state.loading && state.images.length > 1 ? (
        <Spinner />
      ) : (
        state.images.length > 1 && (
          <Button
            value="Load more"
            onClick={setloadmore}
            isLoading={state.loading}
            name="Load-more"
          ></Button>
        )
      )}
    </div>
  );
};

export default Content;
