import { useDispatch } from 'react-redux';
import { setDrawerOpen } from '@/store/drawerSlice';
import {GenericDrawer} from "@/components/Header/PrimarySearchAppBar/GenericDrawer/GenericDrawer";

interface DrawersRendererProps {
    drawers: any[];
    drawerDataMap: any;
}

export const DrawersRenderer = ({ drawers, drawerDataMap }: DrawersRendererProps) => {
    const dispatch = useDispatch();

    return (
        <>
            {drawers.map((drawer) => {
                const drawerKey = drawer.id as 'cart' | 'favorites' | 'comparison';
                return (
                    <GenericDrawer
                        key={drawer.id}
                        open={drawer.open}
                        onClose={() => dispatch(setDrawerOpen({ id: drawer.id, open: false }))}
                        title={drawer.title}
                        items={drawerDataMap[drawerKey].items}
                        emptyMessage={drawer.emptyMessage}
                        onDelete={drawerDataMap[drawerKey].onDelete}
                    />
                );
            })}
        </>
    );
};
