import React, { useEffect, useMemo, useState } from 'react';
import styles from './index.module.scss';
import getUsers from '../../api/getUsers';
import Card from '../Card';
import Button from '../Button';
import Loader from '../Loader';
import setUsers from '../../store/actions/setUsers';
import { useDispatch, useSelector } from 'react-redux';

const GetRequestBlock = ({ usersRef }) => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const { users } = useSelector(state => state.application);

    useEffect(() => {
        setIsLoading(true);
        getUsers(page)
            .then(({users, total_pages}) => {
                dispatch(setUsers(users));
                setIsLoading(false);
                setTotalPages(total_pages);
            });
    }, [page]);
    const handleShowMore = () => {
        setPage(prev => prev + 1);
    };
    const sortedUsers = useMemo(() => {
        return users.sort((a, b) => a.registration_timestamp > b.registration_timestamp);
    }, [users]);
    return (
        <div className={styles.root} ref={usersRef}>
            <h1 className={styles.title}>Working with GET request</h1>
            <div className={styles.cardsWrapper}>
                {sortedUsers.map(({
                                id,
                                name,
                                email,
                                phone,
                                photo,
                                position
                            }) => {
                    return <div key={id} className={styles.cardWrapper}>
                        <Card
                            name={name}
                            email={email}
                            phone={phone}
                            avatar={photo}
                            position={position}
                        />
                    </div>
                })}
                {isLoading && <Loader />}
            </div>
            {page < totalPages ? <div className={styles.showMore}>
                <Button
                    label='Show more'
                    className={styles.button}
                    onClick={handleShowMore}
                />
            </div> : null}
        </div>
    );
};

export default GetRequestBlock;