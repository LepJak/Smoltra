export const orderStateHelper = {
    getState(num) {
        switch (num) {
            case 1:
                return { title: "Ожидает подтверждения", color: "Secondary", colorHex:"#777777"};
            case 3:
                return { title: "В работе", color: "Primary", colorHex:"#5458ef" };
            case 2:
                return { title: "Ожидает оплаты", color: "Info", colorHex:"#1cefcf" };
            case 4:
                return { title: "Ожидает получения", color: "Warning", colorHex:"#b0ba04" };
            case 5:
                return { title: "Завершён", color: "success", colorHex:"#28b55e" };

            default:
                return { title: "Ожидает подтверждения", color: "Secondary", colorHex:"777777" };
        }
    }
}