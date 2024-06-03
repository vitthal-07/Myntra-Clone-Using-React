import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAction } from "../Store/ItemsSlice";
import { fetchStatusActions } from "../Store/FetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        if (fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusActions.markFetchingStarted());
        fetch("http://localhost:8080/items", { signal })
            .then((res) => res.json())
            .then(({ items }) => {
                dispatch(fetchStatusActions.markFetchDone());
                dispatch(fetchStatusActions.markFetchingFinished());
                dispatch(itemsAction.addInitialItems(items[0]));
            });

        return () => {
            controller.abort();
        };
    }, [fetchStatus]);

    return <></>;
};

export default FetchItems;
