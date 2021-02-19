import { useEffect, useState } from 'react';

const useAsyncData = <T extends object>(getData?: () => T[], initialData?: T[]) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        if (getData && !data) {
            const getNewData = async () => {
                const newData = await getData();
                setData(newData);
            };
            getNewData();
        }
    }, [data]);

    return data;
}

export default useAsyncData;