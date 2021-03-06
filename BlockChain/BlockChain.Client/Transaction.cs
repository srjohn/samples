﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BlockChain.Client
{
    public class Transaction
    {
        public Guid Id { get; set; }
        public string PublicKey { get; set; }
        public long Timestamp { get; set; }
        public string Data { get; set; }
    }
}
