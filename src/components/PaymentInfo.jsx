import { motion } from "framer-motion";

const PaymentInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
                {/* Sección de Forma de Pago */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    PAYMENT METHOD
                    </h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-gray mb-2">50%</div>
                            <div className="text-sm text-gray-600 uppercase tracking-wider">
                                reserva
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <div className="h-16 w-px bg-gray-300" />
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-primary mb-2">50%</div>
                                <div className="text-sm text-gray-600 uppercase tracking-wider">
                                day of the event
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divisor */}
                <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-px bg-gray-300" />
                </div>

                {/* Sección de Plazo de Entrega */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    DELIVERY TIME
                    </h2>
                    <div className="text-6xl font-bold text-primary">40</div>
                    <div className="text-lg text-gray-600 uppercase tracking-wider mt-2">
                        days
                    </div>
                </div>
            </div>

        </motion.div>
    );
};

export default PaymentInfo;