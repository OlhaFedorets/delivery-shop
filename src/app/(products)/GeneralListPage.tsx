import {GeneralListPageProps} from "@/types/generalListPageProps";
import {Suspense} from "react";
import GeneralListPageContent from "@/app/(products)/GeneralListPageContent";

const GeneralListPage = ({
                             props,
                         }: {
    props: GeneralListPageProps;
}) => {
    return (
        <Suspense fallback={null}>
            <GeneralListPageContent props={props}/>
        </Suspense>
    );
};

export default GeneralListPage;
