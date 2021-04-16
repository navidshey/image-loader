import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import Spinner from "components/Spinner/Spinner";
import { AppState } from "store/reducers";
import { search, clearImages } from "store/actions/imageActions";
import { chunk } from "../helper/util";
import { IContent } from "../store/types";
import Error from "./Error";
import Button from "./Button";
import { mainColor } from "constants/styles";
import { loadItems } from "constants/variables";

const ColumnDiv = styled.div`
  width: 100%;
`;

const RowDiv = styled.div`
  width: 100%;
  padding: 5px;
  float: right;
  text-align: center;
`;

const Image = styled.img`
  width: 22%;
  min-height: 250px;
  text-align: center;
  padding: 25px;
  margin: 9px;
  vertical-align: middle;
  background: ${mainColor};
`;

const Content = () => {
  const { name, id } = useParams<{
    name: string;
    id: string;
  }>();

  const [imageCount, setImageCount] = useState(loadItems);
  const state = useSelector((state: AppState) => state.image);
  const imageDispatch = useDispatch();

  useEffect(() => {
    imageDispatch(clearImages());
  }, [id]);

  useEffect(() => {
    imageDispatch(search(id));
  }, [imageCount, id]);

  const setloadmore = () => {
    setImageCount((prev) => prev + loadItems);
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
                {items.map((item) => {
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
