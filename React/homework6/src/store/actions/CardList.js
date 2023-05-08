export const FETCH_CARDS_SUCCESS = "FETCH_FILMS_SUCCESS";
export const FETCH_CARDS_BEGIN = "FETCH_FILMS_BEGIN";
export const FETCH_CARDS_FAIL = "FETCH_FILMS_FAIL";

export function fetchFilmsBegin() {
  return {
    type: FETCH_CARDS_BEGIN,
  };
}
export function fetchFilmsSuccess(value) {
  return {
    type: FETCH_CARDS_SUCCESS,
    payload: value,
  };
}
export function fetchFilmsFail(value) {
  return {
    type: FETCH_CARDS_FAIL,
    payload: value,
  };
}

export function fetchHttp() {
  return (dispatch) => {
    dispatch(fetchFilmsBegin());
    fetch("./cards.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("SERVER ERROR");
        } else {
          return response;
        }
      })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchFilmsSuccess(data));
      })
      .catch((err) => fetchFilmsFail(err.message));
  };
}
