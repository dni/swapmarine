const dict = {
    en: {
        history: "History",
        swap: "Swap",
        channel: "Channel",
        refund: "Refund",
        documentation: "Docs",
        onion: "Onion",
        channels: "Channels",
        ordinals: "Ordinals",
        blockexplorer: "Open with blockexplorer",
        help: "Help",
        network_fee: "Network Fee",
        fee: "Boltz Fee",
        denomination: "Denomination",
        min: "Min",
        max: "Max",
        minimum_amount: "Minimum amount is {{ amount }} {{ denomination }}",
        maximum_amount: "Maximum amount is {{ amount }} {{ denomination }}",
        assets: "Assets",
        socialmedia: "Follow us on Social Media",
        footer: "made with ❤️ by Team Boltz",
        create_channel: "Create Lightning Channel",
        create_channel_subline: "Channel Inbound or Outbound Capacity",
        create_swap: "Create Atomic Swap",
        create_swap_subline: "Payment includes network and boltz service fees",
        cancel_swap: "Cancel Swap",
        new_swap: "New Swap",
        success_swap: "Swap Success",
        create_and_paste:
            "Paste a bolt11 lightning invoice\n or a Lightning address\nor a LNURL Paylink\n\nAmount: {{ amount }} {{ denomination }}",
        congrats: "Congratulations!",
        successfully_swapped: "Your swap completed successfully",
        timeout_eta: "Timeout ETA",
        pay_invoice: "Swap: {{ id }}",
        pay_swap_404: "Swap not found!",
        pay_timeout_blockheight: "Timeout blockheight",
        pay_expected_amount: "Expected amount",
        pay_address: "Address",
        lockup_failed: "Lockup Failed!",
        lockup_failed_subline:
            "Your lockup transaction failed, wait for the timeout to refund.",
        failure_reason: "Failure reason",
        invoice_payment_failure: "Could not pay your lightning invoice",
        onchain_address: "Enter {{ asset }} address",
        download_refund_file: "Download refund file",
        copy_invoice: "Copy lightning invoice",
        copy_address: "Copy address",
        copy_amount: "Copy amount",
        copy_bip21: "Copy BIP21",
        copied: "Copied to clipboard!",
        refund_a_swap: "Refund a swap",
        refund_a_swap_subline:
            "Upload your refund file and reclaim your locked funds",
        refund_past_swaps: "Past swaps",
        refund_past_swaps_subline:
            "Swaps that got saved into your browsers storage",
        history_no_swaps: "Looks like you didn't do any swaps yet.",
        refund_address_placeholder: "Refund address",
        refund_clear: "Delete localstorage",
        delete_swap: "Delete swap from localstorage",
        refund_backup: "Backup localstorage",
        delete_localstorage:
            "Are you sure you want to clear your localstorage?\nYour swap information and you refund / claim privatekeys will be lost.",
        tx_in_mempool: "Transaction is in mempool",
        tx_in_mempool_subline: "waiting for confirmation to complete the swap",
        expired: "Swap expired!",
        invoice_pending: "Transaction received, paying invoice.",
        invoice_expired: "Invoice expired, try again!",
        swap_expired: "You did not complete your payment in time.",
        create_invoice_webln: "create invoice via WebLN",
        pay_invoice_webln: "pay invoice via WebLN",
        select_asset: "Select Asset",
        tx_confirmed: "Transaction confirmed",
        tx_ready_to_claim: "claiming transaction now...",
        transaction_refunded: "Boltz has refunded the Transaction",
        refunded: "You have refunded this swap",
        api_offline: "API is offline",
        refund_explainer: "You will be able to refund after the timeout",
        swap_not_refundable_yet: "Your swap is not refundable yet",
        wasm_not_supported: "Please activate WebAssembly in your browser",
    },
    de: {
        history: "Verlauf",
    },
};

export default dict;
