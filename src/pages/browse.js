import React from 'react';
import BrowseContainer from '../containers/browse';
import {useContent} from '../hooks';
import { SelectionMap } from '../utiles';

export default function Browse() {

    const {series} = useContent('series');
    const {films} = useContent('films');
    console.log("f", films);
    console.log("s", series);

    const slides = SelectionMap({series, films});
    return (
        <BrowseContainer slides={slides}/>
    )
}
