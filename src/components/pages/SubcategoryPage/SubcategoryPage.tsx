

import { motion } from "framer-motion";
import {Box} from "@mui/material";

export default function UnderConstructionPage() {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 1370, margin: "auto"}}>
            <Box sx={{display: "flex", alignItems: "center",flexDirection: "column"  }}>

            {/* Заголовок */}
            <motion.h1
                style={{marginTop:"40px"}}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                В РАЗРАБОТКЕ
            </motion.h1>

            {/* Изображение */}
            <motion.img
                style={{marginBottom:"40px", width:500}}
                src="/my-online-store/img/developer.webp" // сюда положи твою картинку
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
            />

            {/* Подпись */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
            >
                Страница ещё в разработке, возвращайтесь позже 🚧
            </motion.p>
            </Box>
        </div>
    );
}


// width: "700px", height: "auto",


